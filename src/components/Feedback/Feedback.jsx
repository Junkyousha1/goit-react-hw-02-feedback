import PropTypes from 'prop-types';
import style from './Feedback.module.css';
import React, { Fragment } from 'react';

function Feedback({ options, onLeaveFeedback }) {
  const optionKeys = Object.keys(options);

  return (
    <>
      <div className={style.feedbackcontainer}>
        {optionKeys.map((option, index) => {
          return (
            <>
              <Fragment key={index}>
                <li className={style.feedbackoptions}>
                  <button
                    type="button"
                    key={index}
                    name={option}
                    value={option}
                    onClick={onLeaveFeedback}
                    className={style.feedbackbtn}
                  >
                    {option}
                  </button>
                </li>
              </Fragment>
            </>
          );
        })}
      </div>
    </>
  );
}

Feedback.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  index: PropTypes.string.isRequired,
};

export default Feedback;
