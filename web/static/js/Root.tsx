import * as React from 'react';

export class Root extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <div className="container">
        <header className="header">
          <div className="row">
            <div className="col-md-12">
              <span className="logo"></span>
            </div>
            <div className="col-md-12">
              <nav role="navigation">
                <ul className="nav nav-pills mt-0 mb-3">
                  <li><a href="http://www.phoenixframework.org/docs">Get Started</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main role="main">
          {this.props.children}
        </main>

      </div>
    )
  }
}
