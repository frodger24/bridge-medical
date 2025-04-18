import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Layout from "./Styling/Layout";
import "./Referral.css";

const Referral = () => {
  return (
    <Layout>
      <div className="jobs-section">
        <h1 className="jobs-title">Referral</h1>
        <div className="jobs-float">
          <p className="jobs-para">
            If you are referring a new client please send the following
            information via email to info@bridge-medial.net to expedite referral
            process:
            <li>Demographic Information</li>
            <li>Insurance Information including date of accident</li>
            <li>Type of service you are referring</li>
          </p>

          <p className="jobs-para">
            Our team will get back to you within 24 hours to confirm receipt and
            begin the verification and scheduling process. We appreciate your
            referral!
          </p>

          <p className="jobs-para">
            Once referred the referral process is as follows:
            <li>
              <strong>Referral</strong> – Attorneys and doctors within the
              Company’s extensive network refer patients to Bridge Medical.
            </li>
            <li>
              <strong>Evaluation</strong> – Patients enter the program through a
              comprehensive neuropsychological assessment.
            </li>
            <li>
              <strong>Review</strong> – Following the evaluation, a
              comprehensive written report, together with statistical scoring,
              is provided to the patient and referring physician or attorney.
            </li>
            <li>
              <strong>Treatment Plan</strong> – If cognitive or psychological
              treatment is recommended, Bridge Medical will develop a
              personalized treatment program for the patient based upon his or
              her unique strengths and weaknesses.
            </li>
            <li>
              <strong>Treatment</strong> – One course of cognitive treatment is
              typically composed of four to six hours of weekly therapy, across
              a span of six to twelve months. Psychotherapy, if needed, can be
              administered weekly, bi‑weekly or monthly.
            </li>
            <li>
              <strong>Progress</strong> – Cognitive rehabilitation assistants
              record each patient’s daily progress. Psychologists on staff also
              regularly assess patients and closely oversee all ongoing
              treatments.
            </li>
            <li>
              <strong>Re‑Evaluation</strong> – Following the first course of
              treatment (after approximately six months), Bridge Medical
              conducts a re‑evaluation to assess the patient’s language and
              cognitive improvements. It is common to recommend a brief course
              of treatment (one to three months) to address residual deficits.
            </li>
            <li>
              <strong>Professional Assistance</strong> – Bridge Medical’s staff
              assists patients on school/job‑related tasks as needed, and helps
              with both the cognitive retraining course and the demands of daily
              life, with the goal of restoring patients to the highest level of
              function possible.
            </li>
            <li>
              <strong>Legal Resources</strong> – Finally, Bridge Medical works
              closely with patients’ attorneys to facilitate the resolution of
              legal and insurance matters throughout the treatment process.
            </li>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Referral;
