import React, { useState, useEffect } from 'react';
import GradientButton from "./GradientButton";
import { useNavigate } from 'react-router-dom';

const Component = ({ event = {} }) => {
  const navigate = useNavigate();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);

  // Separate read more states for each section
  const [readMoreAbout, setReadMoreAbout] = useState(false);
  const [readMoreTeam, setReadMoreTeam] = useState(false);
  const [readMoreJudging, setReadMoreJudging] = useState(false);
  const [readMoreRules, setReadMoreRules] = useState(false);
  const [readMoreVenue, setReadMoreVenue] = useState(false);
  const [readMoreTBA, setReadMoreTBA] = useState(false);
  const [readMoreAim, setReadMoreAim] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prepare arrays from the event strings
  const judgingCriteriaArray = (event.judgingCriteria || '')
    .split('\n')
    .map((item) => item.trim())
    .filter((item) => item.length > 0);

  const rulesArray = (event.rules || '')
    .split('\n')
    .map((item) => item.trim())
    .filter((item) => item.length > 0);

  const teamArrays = (event.team || '')
    .split('\n')
    .map((item) => item.trim())
    .filter((item) => item.length > 0);

  const venueArray = (event.venue || '')
    .split('\n')
    .map((item) => item.trim())
    .filter((item) => item.length > 0);

  // Join arrays into a single string for truncation check
  const teamText = teamArrays.join(' ');
  const judgingText = judgingCriteriaArray.join(' ');
  const rulesText = rulesArray.join(' ');
  const venueText = venueArray.join(' ');

  const TRUNCATE_LENGTH = 150;

  return (
    <div className="flex flex-col items-center justify-center sm:mt-4 sm:pl-28 sm:pr-28">
      <div className="mb-4 text-4xl font-extrabold sm:text-6xl">
        <h1>{event.name}</h1>
      </div>
      <div onClick={() => navigate('form')}>
        <GradientButton>Register Here</GradientButton>
      </div>
      <div className="flex flex-col justify-center">
   
        <h2 className="pl-3 mt-4 text-xl font-semibold">About the event:</h2>
        <p className="p-4 pt-2 text-justify sm:pl-12 sm:pr-16">
          {isSmallScreen && !readMoreAbout && event.about && event.about.length > TRUNCATE_LENGTH
            ? `${event.about.substring(0, TRUNCATE_LENGTH)}...`
            : event.about}
          {isSmallScreen && event.about && event.about.length > TRUNCATE_LENGTH && (
            <span
              className="pl-2 text-blue-500 cursor-pointer"
              onClick={() => setReadMoreAbout(!readMoreAbout)}
            >
              {readMoreAbout ? 'Read Less' : 'Read More'}
            </span>
          )}
        </p>

        <h2 className="pl-3 mt-4 text-xl font-semibold">Team:</h2>
        <div className="p-4 pt-2 text-justify sm:pl-12 sm:pr-16">
          {isSmallScreen && !readMoreTeam && teamText.length > TRUNCATE_LENGTH ? (
            <p>
              {teamText.substring(0, TRUNCATE_LENGTH)}...
              <span
                className="pl-2 text-blue-500 cursor-pointer"
                onClick={() => setReadMoreTeam(true)}
              >
                Read More
              </span>
            </p>
          ) : (
            <>
              {teamArrays.map((member, index) => (
                <p key={index}>{member}</p>
              ))}
              {isSmallScreen && teamText.length > TRUNCATE_LENGTH && (
                <span
                  className="pl-2 text-blue-500 cursor-pointer"
                  onClick={() => setReadMoreTeam(false)}
                >
                  Read Less
                </span>
              )}
            </>
          )}
        </div>

 
        <h2 className="pl-3 mt-4 text-xl font-semibold">Judging Criteria:</h2>
        <div className="p-4 pt-2 text-justify sm:pl-12 sm:pr-16">
          {isSmallScreen && !readMoreJudging && judgingText.length > TRUNCATE_LENGTH ? (
            <p>
              {judgingText.substring(0, TRUNCATE_LENGTH)}...
              <span
                className="pl-2 text-blue-500 cursor-pointer"
                onClick={() => setReadMoreJudging(true)}
              >
                Read More
              </span>
            </p>
          ) : (
            <>
              {judgingCriteriaArray.map((criterion, index) => (
                <p key={index}>{criterion}</p>
              ))}
              {isSmallScreen && judgingText.length > TRUNCATE_LENGTH && (
                <span
                  className="pl-2 text-blue-500 cursor-pointer"
                  onClick={() => setReadMoreJudging(false)}
                >
                  Read Less
                </span>
              )}
            </>
          )}
        </div>

       
        {rulesArray.length > 0 && (
          <div>
            <h2 className="pl-3 mt-4 text-xl font-semibold">Rules:</h2>
            <div className="p-4 pt-2 text-justify sm:pl-12 sm:pr-16">
              {isSmallScreen && !readMoreRules && rulesText.length > TRUNCATE_LENGTH ? (
                <p>
                  {rulesText.substring(0, TRUNCATE_LENGTH)}...
                  <span
                    className="pl-2 text-blue-500 cursor-pointer"
                    onClick={() => setReadMoreRules(true)}
                  >
                    Read More
                  </span>
                </p>
              ) : (
                <>
                  {rulesArray.map((rule, index) => (
                    <p key={index}>{rule}</p>
                  ))}
                  {isSmallScreen && rulesText.length > TRUNCATE_LENGTH && (
                    <span
                      className="pl-2 text-blue-500 cursor-pointer"
                      onClick={() => setReadMoreRules(false)}
                    >
                      Read Less
                    </span>
                  )}
                </>
              )}
            </div>
          </div>
        )}

        {/* Venue Section */}
        {venueArray.length > 0 && (
          <div>
            <h2 className="pl-3 mt-4 text-xl font-semibold">Venue:</h2>
            <div className="p-4 pt-2 text-justify sm:pl-12 sm:pr-16">
              {isSmallScreen && !readMoreVenue && venueText.length > TRUNCATE_LENGTH ? (
                <p>
                  {venueText.substring(0, TRUNCATE_LENGTH)}...
                  <span
                    className="pl-2 text-blue-500 cursor-pointer"
                    onClick={() => setReadMoreVenue(true)}
                  >
                    Read More
                  </span>
                </p>
              ) : (
                <>
                  {venueArray.map((venue, index) => (
                    <p key={index}>{venue}</p>
                  ))}
                  {isSmallScreen && venueText.length > TRUNCATE_LENGTH && (
                    <span
                      className="pl-2 text-blue-500 cursor-pointer"
                      onClick={() => setReadMoreVenue(false)}
                    >
                      Read Less
                    </span>
                  )}
                </>
              )}
            </div>
          </div>
        )}

        <h2 className="pl-3 mt-4 text-xl font-semibold">To be announced:</h2>
        <p className="p-4 pt-2 text-justify sm:pl-12 sm:pr-16">
          {isSmallScreen &&
          !readMoreTBA &&
          event.toBeAnnounced &&
          event.toBeAnnounced.length > TRUNCATE_LENGTH
            ? `${event.toBeAnnounced.substring(0, TRUNCATE_LENGTH)}...`
            : event.toBeAnnounced}
          {isSmallScreen &&
            event.toBeAnnounced &&
            event.toBeAnnounced.length > TRUNCATE_LENGTH && (
              <span
                className="pl-2 text-blue-500 cursor-pointer"
                onClick={() => setReadMoreTBA(!readMoreTBA)}
              >
                {readMoreTBA ? 'Read Less' : 'Read More'}
              </span>
            )}
        </p>

       
        <h2 className="pl-3 mt-4 text-xl font-semibold">Aim:</h2>
        <p className="p-4 pt-2 text-justify sm:pl-12 sm:pr-16">
          {isSmallScreen &&
          !readMoreAim &&
          event.aim &&
          event.aim.length > TRUNCATE_LENGTH
            ? `${event.aim.substring(0, TRUNCATE_LENGTH)}...`
            : event.aim}
          {isSmallScreen &&
            event.aim &&
            event.aim.length > TRUNCATE_LENGTH && (
              <span
                className="pl-2 text-blue-500 cursor-pointer"
                onClick={() => setReadMoreAim(!readMoreAim)}
              >
                {readMoreAim ? 'Read Less' : 'Read More'}
              </span>
            )}
        </p>
      </div>
      <div onClick={() => navigate('form')}>
        <GradientButton>Register Here</GradientButton>
      </div>
    </div>
  );
};

export default Component;
