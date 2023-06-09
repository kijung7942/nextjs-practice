import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: '',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup!'
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: '',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a second meetup!'
  },
];

const HomePage = () => {
  return (
    <MeetupList meetups={DUMMY_MEETUPS}/>
  )
}

export default HomePage