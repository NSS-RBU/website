import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './Navbar.js';
import NSSFooter from './NSSFooter.js';
import './ReachReport.css';

function ReachReport() {
    const { labelreport } = useParams(); // Capture the label parameter from the URL
    const navigate = useNavigate(); // Use the new `useNavigate` hook
    const [selectedYear, setSelectedYear] = useState(null);
    const [isActive, setIsActive] = useState(false); // To trigger content display after load

    useEffect(() => {
        setIsActive(true); // Activate the content display after the component is mounted
    }, []);

    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
    };

    const navigateToYearReport = () => {
        if (selectedYear) {
            // Redirect to the year-specific report route
            navigate(`/${labelreport}/${selectedYear}`);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
        setIsActive(true); // Activate the content display after the component is mounted
    }, [labelreport]); // Re-run the effect whenever the labelreport changes

    let title = "";
    let content = "";

    // Handle reports with year selection logic
    if (labelreport === 'volunteersreport' || labelreport === 'studentsengagedreport' || labelreport === 'happychildrenreport') {
        return (
            <div>
                <Navbar />
                <div className={`report-page ${isActive ? 'active' : ''}`}>
                    <h1>🎉 Welcome to the {labelreport.replace('report', '').toUpperCase()} Report Section 🎉</h1>
                    <p>Select the year to view the report:</p>
                    <select value={selectedYear} onChange={handleYearChange}>
                        <option value="">-- Select Year --</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                    </select>
                    <div className="buttonReport">
                        <button onClick={navigateToYearReport} disabled={!selectedYear}>View Report</button>
                    </div>
                </div>
                <NSSFooter />
            </div>
        );
    }

    // Handle other reports without year selection
    switch (labelreport) {
        case 'volunteersreport':
            title = "Volunteers Report";
            content = "This page will contain the detailed report about Volunteers.";
            break;
        case 'happychildrenreport':
            title = "Happy Children Report";
            content = "This page will contain the detailed report about Happy Children.";
            break;
        case 'newsfeaturesreport':
            title = "News Features Report";
            content = "This page will contain the detailed report about News Features.";
            break;
        case 'studentsengagedreport':
            title = "Students Engaged Report";
            content = "This page will contain the detailed report about Students Engaged.";
            break;
        case 'instagramfollowersreport':
            title = "Instagram Followers Report";
            content = "This page will contain the detailed report about Instagram Followers.";
            break;
        case 'achievementsreport':
            title = "Achievements Report";
            content = "This page will contain the detailed report about Achievements.";
            break;

        case 'educationreport':
            title = "Education Domain";
            content = "This domain focuses on providing educational resources, workshops, and training programs.";
            break;
        case 'healthreport':
            title = "Health Domain";
            content = "This domain focuses on promoting health awareness, medical camps, and wellness initiatives.";
            break;
        case 'innovationreport':
            title = "Innovation Domain";
            content = "This domain focuses on fostering innovation through technology, research, and creative problem-solving.";
            break;
        case 'societyreport':
            title = "Society Domain";
            content = "This domain focuses on social services, including community building and social welfare activities.";
            break;
        case 'environmentreport':
            title = "Environment Domain";
            content = "This domain focuses on environmental conservation, sustainable practices, and eco-friendly initiatives.";
            break;
        case 'ruralreport':
            title = "Rural Domain";
            content = "This domain focuses on rural development, empowerment, and supporting underserved communities.";
            break;
        default:
            title = "Domain Not Found";
            content = "Sorry, the domain you're looking for doesn't exist.";
    }

    return (
        <div>
            <Navbar />
            <div className={`report-page ${isActive ? 'active' : ''}`}>
                <h1>{title}</h1>
                <p>{content}</p>
            </div>
            <NSSFooter />
        </div>
    );
}

export default ReachReport;