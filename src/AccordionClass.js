import React, { PureComponent } from "react";
const mockData = [
  { id: 1, title: "Title 1", content: "Content 1" },
  { id: 2, title: "Title 2", content: "Content 2" },
  { id: 3, title: "Title 3", content: "Content 3" }
];
export default class Accordion extends PureComponent {
  state = { data: [], currentItem: {} };
  componentDidMount() {
    this.setState({ data: mockData });
  }
  render() {
    return (
      <>
        <h5>Accordion Class</h5>
        <div>
          {this.state.data.map((item) => {
            return (
              <>
                <div
                  key={item.id}
                  onClick={() => {
                    if (this.state.currentItem.id === item.id) {
                      this.setState({ currentItem: {} });
                    } else {
                      this.setState({ currentItem: item });
                    }
                  }}
                >
                  <div>{item.title}</div>
                  <div
                    style={{
                      display:
                        this.state.currentItem.id === item.id ? "block" : "none"
                    }}
                  >
                    {item.content}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  }
}
