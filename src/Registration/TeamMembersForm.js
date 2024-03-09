// TeamMembersForm.js
import React, { useState } from 'react';
import FormInput from './FormInput';

const TeamMembersForm = ({ onSubmit }) => {
  const [teamMembers, setTeamMembers] = useState([]);

  const handleAddMember = () => {
    setTeamMembers([...teamMembers, [(teamMembers.length), { memberName: '', memberEmail: '', memberMobile: '', memberBranch: '', memberCollege: '' }]]);

    console.log(teamMembers)
  };

  const handleRemoveMember = (index) => {
    const updatedMembers = [...teamMembers];
    updatedMembers.splice(index, 1);
    setTeamMembers(updatedMembers);

    console.log(teamMembers)
  };

  const handleMemberDetailsChange = (index, field, value) => {
    const updatedMembers = [...teamMembers];
    updatedMembers[index][field] = value;
    setTeamMembers(updatedMembers);
  };

  const handleSubmit = (e) => {
    // setTeamMembers([...teamMembers, [(teamMembers.length), { memberName: '', memberEmail: '', memberMobile: '', memberBranch: '', memberCollege: '' }]]);
    e.preventDefault();
    onSubmit(teamMembers);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-blue-500">Team Members Details</h2>
      {teamMembers.map((member, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-bold mb-2">Member {index + 1}</h3>
          <FormInput
            label="Member Name"
            type="text"
            name={`memberName${index}`}
            value={member.memberName}
            onChange={(e) => handleMemberDetailsChange(index, 'memberName', e.target.value)}
            required
          />
          <FormInput
            label="Member Email"
            type="email"
            name={`memberEmail${index}`}
            value={member.memberEmail}
            onChange={(e) => handleMemberDetailsChange(index, 'memberEmail', e.target.value)}
            required
          />
          <FormInput
            label="Member Mobile"
            type="tel"
            name={`memberMobile${index}`}
            value={member.memberMobile}
            onChange={(e) => handleMemberDetailsChange(index, 'memberMobile', e.target.value)}
            required
          />
          <FormInput
            label="Branch"
            type="text"
            name={`memberBranch${index}`}
            value={member.memberBranch}
            onChange={(e) => handleMemberDetailsChange(index, 'memberBranch', e.target.value)}
            required
          />
          <FormInput
            label="College Name"
            type="text"
            name={`memberCollege${index}`}
            value={member.memberCollege}
            onChange={(e) => handleMemberDetailsChange(index, 'memberCollege', e.target.value)}
            required
          />
          <button type="button" onClick={() => handleRemoveMember(index)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
            Remove Member
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddMember} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add Member
      </button>
      <div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </div>
    </form>
  );
};

export default TeamMembersForm;
