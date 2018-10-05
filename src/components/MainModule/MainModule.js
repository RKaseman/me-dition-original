
import React from "react";
import "./MainModule.css";
import ModuleHead from "../ModuleHead";
import TableHead from "../TableHead";
import TableBody from "../TableBody";
import Wrapper from "../Wrapper";
import logos from "../../logos.json";

class MainModule extends React.Component {
    state = {
        logos: logos
    };

    gameState = (id) => {
        const logos = this.state.logos.sort(logo => logo.id !== id);
        console.log(this.state.clicked);
        console.log(id);
        if (this.state.clicked === id) {
            this.setState({
                count: 0
            });
            } else {
            this.setState({
                logos: logos,
                count: this.state.count + 1,
                totalCount: this.state.totalCount + 1,
                clicked: id
            });
        }
    };

    render() {
        return (
            <div className="App">
                <ModuleHead
                    count={this.state.logos.length}
                    // totalCount={this.state.totalCount}
                />
                <Wrapper>
                    <TableHead />
                    {this.state.logos.map(logo => (
                        <TableBody
                            key={logo.id}
                            id={logo.id}
                            cover={logo.cover}
                            title={logo.title}
                            author={logo.author}
                            published={logo.published}
                            kindle={logo.kindle}
                            series={logo.series}
                            number={logo.number}
                            image={logo.image}
                        />
                    ))}
                </Wrapper>
            </div>
        );
    };

};

export default MainModule;

