// our-domain.com/new-meetup

import NewMeetupForm from '../../components/meetups/NewMeetupForm'

function NewMeetupPage() {
    function addMeetUpHAndler(enteredMeetupData) {
        console.log(enteredMeetupData)
    }

    return <NewMeetupForm onAddMeetup={addMeetUpHAndler}/>
}

export default NewMeetupPage;