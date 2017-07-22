import * as React from 'react'
import Header from './components/Header'

export class Root extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <div>
        <Header />

        <div className="container content mt-4">
          <main role="main">
            {this.props.children}
          </main>
        </div>

      </div>
    )
  }
}
