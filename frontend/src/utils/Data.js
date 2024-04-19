import Avatar from 'react-avatar'

export const data = [
  {
    _id: '1',
    title: 'My 2022 Journey',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Eius, doloribus harum?`,
    eventDate: new Date('25 July, 2022 11:50 AM'),
    user: {
      _id: '1',
      name: 'Ahmed Ibrahim',
      email: 'info@ahmedibra.com',
      image: (
        <Avatar
          name='Ahmed Ibrahim'
          size='20'
          textSizeRatio={1.75}
          round='25px'
        />
      ),
    },
  },
  {
    _id: '2',
    title: 'Revising Javascript Library',
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam temporibus officia facere saepe doloribus dolorem asperiores magnam molestias, aut beatae corrupti repellendus quo cum. Blanditiis inventore harum animi?`,
    eventDate: new Date('03 August, 2022 02:14 PM'),
    user: {
      _id: '2',
      name: 'John Doe',
      email: 'johdoe@ahmedibra.com',
      image: (
        <Avatar name='John Doe' size='20' textSizeRatio={1.75} round='25px' />
      ),
    },
  },
  {
    _id: '3',
    title: 'New Web Dev Tips',
    description: `
How do you build a site to support peak traffic, when peak traffic means a fanbase of over 100 million Youtube subscribers? In this guest post, Julian Benegas, Head of Development at basement.studio, walks us through balancing performance, entertainment, and keeping "the buying flow" as the star of the show for MrBeast's new storefront.

It all started with a call from Revolt. The merchandiser had big news to share---they were leading a new campaign for MrBeast, and [our studio ](https://basement.studio/)would be designing and developing the storefront where his immense fanbase would shop.

With MrBeast's almost 200 million followers across social channels, we knew Vercel could handle traffic, but we had never handled as much as MrBeast would bring.

However, keeping the site up alone wasn't enough. We needed to give every visitor a delightful shopping experience. That meant a top-notch experience in terms of both design and performance, with fun mini-games to make it feels like a MrBeast video. Most importantly, it had to direct users to buy.
`,
    eventDate: new Date('04 September, 2022 06:00 PM'),
    user: {
      _id: '1',
      name: 'Ahmed Ibrahim',
      email: 'info@ahmedibra.com',
      image: (
        <Avatar
          name='Ahmed Ibrahim'
          size='20'
          textSizeRatio={1.75}
          round='25px'
        />
      ),
    },
  },
]
