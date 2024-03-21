import React from 'react';
import './RegForm.css';

function Enginuity() {
  return (
    <div>
      <form>
        <h3>University details</h3>
        <div className="input-group-school">
          <label htmlFor="School name">School name</label>
          <input type="text" id="name" required/>
        </div>
        <h3>Personal details</h3>
        <div className="input-group-personal">
          <label htmlFor="Point of contact name">Point of contact name</label>
          <input type="text" id="name" required/>
        </div>
        <div className="input-group-personal">
          <label htmlFor="Point of contact position">Point of contact position</label>
          <input type="text" id="name" required/>
        </div>
        <div className="input-group-personal">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="input-group-personal">
          <label htmlFor="contact-phone">Contact number</label>
          <input type="tel" id="contact-phone" />
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
          <button type="button" id="add-participant">Add Participant</button>
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
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>

  )
}

export default Enginuity
