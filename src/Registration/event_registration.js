// EventRegistrationForm.js
import React, { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';

import firebase from '../firebase-google-drive-clone/src/firebase';
import LeaderDetailsForm from './LeaderDetailsForm';

import TeamMembersForm from './TeamMembersForm';
import FormInput from './FormInput';
import EventDetailsForm from './EventDetailForm';
const EventRegistrationForm = () => {
    const { eventId, eventName } = useParams();
    const [step, setStep] = useState(1);
    const [eventDetails, setEventDetails] = useState({});
    const [leaderDetails, setLeaderDetails] = useState({});
    const [teamMembers, setTeamMembers] = useState([]);
    const save = firebase.firestore();
  
    useEffect(() => {
      // Fetch event details based on the eventId from the URL
      const fetchEventDetails = async () => {
        try {
          const eventDoc = await save.collection('events').doc(eventId).get();
          if (eventDoc.exists) {
            setEventDetails({ eventId, eventName, ...eventDoc.data() });
          } else {
            console.error('Event not found');
          }
        } catch (error) {
          console.error('Error fetching event details:', error);
        }
      };
  
      fetchEventDetails();
    }, [eventId, eventName]);
  
    const saveLeaderDetails = async () => {
      // Save leader details to Firestore
      const leaderDocRef = await save.collection('events').doc(eventId).collection('participants').add({
        eventId,
        eventName,
        ...leaderDetails,
        ...teamMembers
      });
  
      return leaderDocRef.id;
    };
  
    const saveTeamMembersDetails = async (leaderDocId) => {
      // Save team members' details to Firestore
      const teamMembersPromises = teamMembers.map(async (member, index) => {
        return save.collection('events').doc(eventId).collection('participants').add({
          eventId,
          eventName,
          leaderId: leaderDocId,
          memberNumber: index + 1,
          ...member,
        });
      });
  
      return Promise.all(teamMembersPromises);
    };
  
    const handleLeaderDetailsSubmit = async (details) => {
      setLeaderDetails(details);
      setStep(2);
    };
  
    const handleMembersFormSubmit = async (memberDetails) => {
      setTeamMembers(memberDetails);
      console.log(teamMembers)
      setStep(3);
    };
  
    const handleRegistrationSubmit = async () => {

      try {
        await saveLeaderDetails();
        // await saveTeamMembersDetails(leaderDocId);
  
        alert('You have successfully registered!');
      } catch (error) {
        console.error('Error saving to Firestore:', error);
        alert('Registration failed. Please try again.');
      }
    };
  
    return (
      <div>
        {step === 1 && <LeaderDetailsForm onSubmit={handleLeaderDetailsSubmit} eventName ={eventName}/>}
        {step === 2 && <TeamMembersForm onSubmit={handleMembersFormSubmit} />}
        {step === 3 && (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-blue-500">Congratulations!</h2>
            <p>You have successfully registered for the event {eventDetails.eventName}.</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={handleRegistrationSubmit}
            >
              Finish Registration
            </button>
          </div>
        )}
      </div>
    );
  };
  
  export default EventRegistrationForm;