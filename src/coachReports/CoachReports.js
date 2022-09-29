import React, { useState, useRef, useEffect, useContext } from 'react';
import './CoachReports.scss';
import { AppUserContext } from '../context/UserContext';
import { getCoachReportForUser } from '../config/service/UserService';
import moment from 'moment';

function CoachReports(props) {

    const [reportData, setReportData] = useState([]),
        [headerParagraph, setHeaderParagraph] = useState(),
        [challengeParagraph, setChallengeParagraph] = useState(),
        [detailParagraphs, setDetailParagraphs] = useState([]),
        [personalNotes, setPersonalNotes] = useState([]),
        [userToken, setUserToken] = useState(props.match.params.handle),
        coachReportsRef = useRef(),
        [isLoaded, setIsLoaded] = useState(false),
        { setIsAppUser } = useContext(AppUserContext);

    useEffect(() => {
        document.body.style.backgroundColor = 'white';

        return () => {
            document.body.style.backgroundColor = '';
        }
    }, []);

    useEffect(() => {
        const userToken = props && props.match && props.match.params && props.match.params.handle;
        if (userToken && !userToken.includes('_')) {
            setUserToken(userToken);
            fetchCoachReport(userToken);
            setIsAppUser(true);
            coachReportsRef.current.style.marginTop = '-25px';

            return () => setIsAppUser(false);
        }
    }, [props.match.params]);

    const fetchCoachReport = (userToken) => {
        getCoachReportForUser(userToken)
            .then(res => {
                setReportData(res);
                const tempParagraphs = [];
                const tempPersonalNotes = [];
                Object.keys(res).forEach(key => {
                    if (key === "paragraph01") {
                        setHeaderParagraph(res[key])
                    }
                    else if (key === "paragraph02") {
                        setChallengeParagraph(res[key])
                    }
                    else if (key.includes('paragraph') && res[key]) {
                        tempParagraphs[Number(key.slice(-2))] = res[key];
                    }
                    if (key.includes('personalnote') && res[key]) {
                        tempPersonalNotes[Number(key.slice(-1))] = res[key];
                    }
                })
                setDetailParagraphs(tempParagraphs);
                setPersonalNotes(tempPersonalNotes);
                setIsLoaded(true);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const formatDate = (date) => {
        return moment(date).format('dddd, MMMM Do, YYYY')
    }

    return (
        <div className='coach-reports' ref={coachReportsRef}>
            <h5>Created: {formatDate(reportData.created)}</h5>
            {headerParagraph && 
                <>
                    <h3 className='coach-report-greeting'>Hello!</h3>
                    <p>
                        {headerParagraph}
                    </p>
                </>
            }
            {challengeParagraph && 
                <section className='challenge-block' aria-labelledby='challenge-header'>
                    <h3 className='challenge-header'>This Week's Challenge</h3>
                    <p>
                        {challengeParagraph}
                    </p>
                    <label>{reportData.coach}</label>
                </section>
            }

            {(detailParagraphs.length > 0 || personalNotes.length > 0) &&
                <>
                    <h3 className='coach-report-greeting'>
                        The Detail:
                    </h3>
                    {detailParagraphs.map((p, index) => 
                        p && <p className="dietitian-paragraph" key={index}>
                            {p}
                        </p>
                    )}
                    {personalNotes.map((p, index) => 
                        p && <p className="dietitian-paragraph" key={index}>
                            {p}
                        </p>
                    )}
                </>
            }
            {!headerParagraph && <p className='dietitian-paragraph'>
                You don't have any available reports. Please check again later.
            </p>}
        </div>
    );
}
  
export default CoachReports;