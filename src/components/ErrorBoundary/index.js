import React from "react";
import img from "../../assets/warning.png";
import "./error.css";

class ErrorBoundary extends React.Component {
  // Constructor for initializing Variables etc in a state
  // Just similar to initial line of useState if you are familiar
  // with Functional Components
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  // This method is called if any error is encountered
  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and
    // re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });

    // You can also log error messages to an error
    // reporting service here
  }

  // This will render this component wherever called
  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <>
          <div className="error-container">
            <details>
              <summary className="error__summary">
                <img src={img} alt="warning" className="error__img" />
                <h3 className="error__main-text">Something went wrong.</h3>
              </summary>
              <p className="error__text">
                {this.state.error && this.state.error.toString()}
                <br />
                {this.state.errorInfo.componentStack}
              </p>
            </details>
          </div>
        </>
      );
    }
    // Normally, just render children, i.e. in
    // case no error is Found
    return this.props.children;
  }
}

export default ErrorBoundary;
