import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import FormContainer from '../components/FormContainer'
import { getFromLocalStorage } from '../utils/localStorage'
import '../index.scss'
const Form = () => {
  const param = useParams()
  const navigate = useNavigate()
  const [error, setError] = useState('')

  useEffect(() => {
    if (!getFromLocalStorage('userInfo')) return navigate('/login')
  }, [navigate])

  const [id, setId] = useState(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [eventDate, setEventDate] = useState('')
  const [formStatus, setFormStatus] = useState('create')

  const createDiary = async ({ title, description, eventDate }) => {
    try {
      await axios.post(
        `http://localhost:4000/api/diaries`,
        { title, description, eventDate },
        {
          headers: {
            Authorization: `Bearer ${getFromLocalStorage('userInfo')?.token}`,
          },
        }
      )
      return navigate('/')
    } catch (error) {
      setError(error?.response?.data?.error)
      return setTimeout(() => {
        setError('')
      }, 5000)
    }
  }

  const updateDiary = async ({ _id, title, description, eventDate }) => {
    try {
      await axios.put(
        `http://localhost:4000/api/diaries/${_id}`,
        { _id, title, description, eventDate },
        {
          headers: {
            Authorization: `Bearer ${getFromLocalStorage('userInfo')?.token}`,
          },
        }
      )
      return navigate('/')
    } catch (error) {
      setError(error?.response?.data?.error)
      return setTimeout(() => {
        setError('')
      }, 5000)
    }
  }

  const getDiary = async ({ _id }) => {
    try {
      const { data } = await axios.get(
        `http://localhost:4000/api/diaries/${_id}`,
        {
          headers: {
            Authorization: `Bearer ${getFromLocalStorage('userInfo')?.token}`,
          },
        }
      )
      setTitle(data?.title)
      setDescription(data?.description)
      setEventDate(moment(data?.eventDate).format('YYYY-MM-DDTHH:MM'))
      setId(data?._id)
      setFormStatus('edit')

      return data
    } catch (error) {
      setError(error?.response?.data?.error)
      return setTimeout(() => {
        setError('')
      }, 5000)
    }
  }

  useEffect(() => {
    if (param?.id) {
      getDiary({ _id: param.id })
    } else {
      setTitle('')
      setDescription('')
      setEventDate('')
      setFormStatus('create')
      setId(null)
    }
  }, [param])

  const submitHandler = (e) => {
    e.preventDefault()
    if (formStatus === 'create')
      return createDiary({ title, description, eventDate })

    if (formStatus === 'edit')
      return updateDiary({ _id: id, title, description, eventDate })
  }

  return (
    <FormContainer>
      <form onSubmit={(e) => submitHandler(e)}>
        <div className='col-md-8 col-12 mx-auto shadow-sm p-5' id="conte">
          {error && (
            <div className='alert alert-danger text-center mb-3'>{error}</div>
          )}
          <h1 className='title text-center'>Diary Form</h1> <hr />
          <div className='mb-3'>
            <label htmlFor='title' className='form-label'>
              Title
            </label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type='text'
              className='form-control'
              id='title'
              required
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='description' className='form-label'>
              Description
            </label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              cols={30}
              rows={10}
              type='text'
              className='form-control'
              id='description'
              required
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='date' className='form-label'>
              Event Date
            </label>
            <input
              onChange={(e) => setEventDate(e.target.value)}
              value={eventDate}
              type='datetime-local'
              className='form-control'
              id='date'
              required
            />
          </div>
          <Link
            to='/'
            type='button'
            className='btn btn-primary w-50 text-light'
            id="cancel" 
          
          >
            CANCEL
          </Link>
          <button type='submit' className='btn btn-primary w-50 text-light'>
            SUBMIT
          </button>
        </div>
      </form>
    </FormContainer>
  )
}

export default Form
