import React, { useState } from 'react';
import './RegForm.css';

function Technofest() {
  const [formData, setFormData] = useState({
    schoolName: "",
    contactName: "",
    email: "",
    contactNo: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
 });
  

    // Update form data
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    console.log("Submitted");
  }

  const addParticipant = (event) => {
    console.log("Needs to be added");
  }
  return (   
    <div>
      <form>
        <h3>School details</h3>
        <div className="input-group-school">
          <label> School Name:
           <input
             type="text"
             name="schoolName"
             value={formData.schoolName}
             onChange={handleInputChange}
           />
          </label>
        </div>
        <h3>Personal details</h3>
        <div className="input-group-personal">
          <label> Point of contact Name:
           <input
             type="text"
             name="contactName"
             value={formData.contactName}
             onChange={handleInputChange}
           />
          </label>
        </div>
        <div className="input-group-personal">
          <label> Email:
           <input
             type="email"
             name="email"
             value={formData.email}
             onChange={handleInputChange}
           />
          </label>
        </div>
        <div className="input-group-personal">
         <label> Contact No.:
           <input
             type="tel"
             name="contactNo"
             value={formData.contactNo}
             onChange={handleInputChange}
           />
          </label>
        </div>
        <div>
          <h3>Attending Participants</h3>
          <table id="participants-table">
           <thead>
            <tr>
             <th>Name</th>
             <th>Grade Level</th>
            </tr>
           </thead>
           <tbody></tbody>
          </table>
          <button type="button" id="add-participant" onClick={addParticipant}>Add Participant</button>
        </div>
        <div className="event-input">
            <h3>Event details</h3>
            <p>The [Event Name] will be held on [Date] from [Start Time] to [End Time] at [Location].</p>
            <label>Please indicate which event activities your school is interested in participating in:</label>
            <div>
             <input type="checkbox" id="coding-competitions" name="event-activities" value="Coding Competitions" />
             <label for="coding-competitions">Coding Competitions</label>
            </div>
            <div>
             <input type="checkbox" id="robotics-showcase" name="event-activities" value="Robotics Showcase" />
             <label for="robotics-showcase">Robotics Showcase</label>
            </div>
            <div>
             <input type="checkbox" id="career-fair" name="event-activities" value="Career Fair" />
             <label for="career-fair">Career Fair</label>
            </div>
            <div>
             <input type="checkbox" id="speaker-sessions" name="event-activities" value="Speaker Sessions" />
             <label for="speaker-sessions">Speaker Sessions</label>
            </div>
            <div>
             <label for="other-activities">Other:</label>
             <input type="text" id="other-activities" name="other-activities" />
            </div>
        </div>
        <button type="submit" onClick={handleSubmit} className="submit-btn">
          Submit
        </button>
      </form>
    </div>

  )
}

export default Technofest
