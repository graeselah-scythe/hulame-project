import React from 'react';
import './PostContent.css';
import { PhoneIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { Venus, Cake } from "lucide-react";
import { UserCircleIcon, LinkIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom'; // Import Link for navigation if you're using React Router

const PostContent = () => {
  return (
    <main className="postContent">
      <section className="contentSection">
        <div className="contentColumns">
          <div className="column">
            <div className="aboutContainer">
              <div className="aboutColumns">
                <div className="aboutMainColumn">
                  <div className="aboutContent">
                    <h2 className="sectionTitle">About</h2>
                    <div className="personalInfo">
                      <div className="infoItem">
                        <div className="infoRow">
                          <AcademicCapIcon className="icon" />
                          <div>
                            <h3 className="infoLabel">Course & Year Level</h3>
                            <p className="infoValue">BSCPE_2ND YEAR</p>
                          </div>
                        </div>
                      </div>
                      <div className="infoItem">
                        <div className="infoRow">
                          <Cake className="icon" />
                          <div>
                            <h3 className="infoLabel">Birthday</h3>
                            <p className="infoValue">July 26, 2005</p>
                          </div>
                        </div>
                      </div>
                      <div className="infoItem">
                        <div className="infoRow">
                          <Venus className="icon" />
                          <div>
                            <h3 className="infoLabel">Gender</h3>
                            <p className="infoValue">Female</p>
                          </div>
                        </div>
                      </div>
                      <div className="infoItem">
                        <div className="infoRow">
                          <LinkIcon className="icon" />
                          <div>
                            <h3 className="infoLabel">Social Link</h3>
                            <a
                              href="https://www.facebook.com/krlslm"
                              className="socialLink"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              https://www.facebook.com/krlslm
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="contactColumn">
                  <div className="contactInfo">
                    <div className="infoRow">
                      <PhoneIcon className="phoneIcon" />
                      <div>
                        <h3 className="infoLabel">Contact Information</h3>
                        <p className="infoValue">09090960428</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="postsColumn">
            <div className="postsContainer">
              <h2 className="sectionTitle">Posts</h2>
              <div className="postItem">
                <div className="notificationOutline">
                  <UserCircleIcon className="postIcon" />
                  <p className="postNotification">
                    You posted in <strong>Rental.</strong>{" "}
                    {/* Update this part to wrap the text with a Link component */}
                    <Link to="/post/1" className="viewPostLink">View Post here.</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default PostContent;
