import React from 'react'
import { FaInstagram,FaFacebookSquare,FaLinkedin,FaGithubSquare } from 'react-icons/fa';
export const Footer = () => {
    return (
        <footer>
            <div className="social-icons">
                <a target='_blank' rel="noreferrer" href="https://www.instagram.com/simonaspaulius/"><FaInstagram /></a >
                <a target='_blank' rel="noreferrer" href="https://www.facebook.com/simonas.paulius"><FaFacebookSquare/></a >
                <a target='_blank' rel="noreferrer" href="https://lt.linkedin.com/in/simonas-paulius-73a68814a?challengeId=AQHc-Dv5lMtE4QAAAXZIsMtBbiIngcovTEG2sQANZ9sLtEuVT9ip3BWdiepOJxlAl-p-1c0MSwAgDaKnWk7nOcH_edWQDro_dg&submissionId=4769639c-ab1e-4f16-ff06-f0a492bf317d"><FaLinkedin/></a >
                <a target='_blank' rel="noreferrer" href="https://github.com/simuxs123"><FaGithubSquare/></a >
            </div>
        </footer>
    )
}
