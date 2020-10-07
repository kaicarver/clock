import * as React from "react";

let Logo = "logrocket_logo.png";

export default class FirstComponent extends React.Component<{}> {
  render() {
    return (
      <div>
        {/* React components must have a wrapper node/element */}
        <h3>A Simple React Component Example with Typescript</h3>
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <p>I am a component which shows the <a 
          href="https://blog.logrocket.com/how-why-a-guide-to-using-typescript-with-react-fffb76c61614/">
            logrocket
          </a> logo.</p>
      </div>
    );
  }
}
