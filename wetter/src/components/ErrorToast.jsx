import { useEffect } from 'react';
import { FiAlertTriangle, FiX } from 'react-icons/fi';
import '../App.css';

const ErrorToast = ({ error, onDismiss }) => {
  useEffect(() => {
    const timer = setTimeout(onDismiss, 4500);
    return () => clearTimeout(timer);
  }, [error, onDismiss]);

  return (
    <div className="error-toast">
      <div className="error-content">
      <FiAlertTriangle className="error-icon" />
        <div className="error-text">
          <h4 className="error-heading">Error</h4>
          <p className="error-message">{error}</p>
        </div>
      </div>
      <button 
        className="error-close"
        onClick={onDismiss}
        aria-label="Close error message"
      >
        <FiX />
      </button>
    </div>
  );
};

export default ErrorToast;