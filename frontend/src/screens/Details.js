import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { data } from '../utils/Data'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { getFromLocalStorage } from '../utils/localStorage'
import axios from 'axios'

const Details = () => {
  const param = useParams()
  const navigate = useNavigate()
  const [event, setEvent] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (!getFromLocalStorage('userInfo')) return navigate('/login')
  }, [navigate])

  const getDiary = async (_id) => {
    try {
      const { data } = await axios.get(
        `http://localhost:4000/api/diaries/${_id}`,
        {
          headers: {
            Authorization: `Bearer ${getFromLocalStorage('userInfo')?.token}`,
          },
        }
      )

      return setEvent(data)
    } catch (error) {
      setError(error?.response?.data?.error)
      return setTimeout(() => {
        setError('')
      }, 5000)
    }
  }

  const deleteDiary = async (_id) => {
    try {
      await axios.delete(`http://localhost:4000/api/diaries/${_id}`, {
        headers: {
          Authorization: `Bearer ${getFromLocalStorage('userInfo')?.token}`,
        },
      })

      return navigate('/')
    } catch (error) {
      setError(error?.response?.data?.error)
      return setTimeout(() => {
        setError('')
      }, 5000)
    }
  }

  useEffect(() => {
    if (param.id) getDiary(param?.id)
  }, [param.id])

  const handleDelete = (e) => {
    deleteDiary(e)
  }

  return (
    <div className='col-lg-8 col-md-10 col-12 mx-auto'>
      {error && (
        <div className='alert alert-danger text-center mb-3'>{error}</div>
      )}
      <div className='card border-0 shadow-sm rounded-0'>
        <div className='card-body'>
          <div className='card-img-top text-center title'>
            <span className='display-1'>
              {moment(event?.eventDate).format('DD')}
            </span>
            <span>{moment(event?.eventDate).format('MMMM YYYY, H:mm:ss')}</span>
          </div>
          <hr />
          <Link
            to={`/diary/details/${event?._id}`}
            className='text-decoration-none'
          >
            <h2 className='card-title font-monospace fs-5 fw-bold'>
              {event?.title}
            </h2>
          </Link>
          <div className='card-text'>
            <div className='d-flex justify-content-between align-items-center mb-3'>
              <div>
                <span>{event?.user?.image}</span>
                <small className='ms-2 f-italic'>{event?.user?.name}</small>
              </div>
              <div>
                <Link to={`/diary/form/${event?._id}`}>
                  <FaEdit />
                </Link>
                <FaTrash
                  onClick={() => handleDelete(event?._id)}
                  className='ms-2 text-danger'
                />
              </div>
            </div>
            <ReactMarkdown children={`${event?.description}`} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
