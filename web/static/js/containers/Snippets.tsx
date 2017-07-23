import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

// TODO: Consider looking into Monaco Editor? Ace is good but both have their
// own advantages. <https://microsoft.github.io/monaco-editor/>

export default class Snippets extends React.Component<RouteComponentProps<{}>, {}> {
  public render(): JSX.Element {
    return (
      <div>
        <h1>Snippets</h1>
      </div>
    )
  }
}
