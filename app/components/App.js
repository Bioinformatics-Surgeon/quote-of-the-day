const React = require("react");
const Nav = require("./Nav");
const Home = require("./Home");
const Quote = require("./Quote");
const Contact = require("./Contact");
const ReactRouter = require("react-router-dom");
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteTitle: "To be or not to be",
      quoteBody: `To be, or not to be, that is the question:
      Whether 'tis nobler in the mind to suffer
      The slings and arrows of outrageous fortune,
      Or to take arms against a sea of troubles
      And by opposing end them. To die—to sleep,
      No more; and by a sleep to say we end
      The heart-ache and the thousand natural shocks
      That flesh is heir to: 'tis a consummation
      Devoutly to be wish'd. To die, to sleep;
      To sleep, perchance to dream—ay, there's the rub:
      For in that sleep of death what dreams may come,
      When we have shuffled off this mortal coil,
      Must give us pause—there's the respect
      That makes calamity of so long life.
      For who would bear the whips and scorns of time,
      Th'oppressor's wrong, the proud man's contumely,
      The pangs of dispriz'd love, the law's delay,
      The insolence of office, and the spurns
      That patient merit of th'unworthy takes,
      When he himself might his quietus make
      With a bare bodkin? Who would fardels bear,
      To grunt and sweat under a weary life,
      But that the dread of something after death,
      The undiscovere'd country, from whose bourn
      No traveller returns, puzzles the will,
      And makes us rather bear those ills we have
      Than fly to others that we know not of?
      Thus conscience does make cowards of us all,
      And thus the native hue of resolution
      Is sicklied o'er with the pale cast of thought,
      And enterprises of great pitch and moment
      With this regard their currents turn awry
      And lose the name of action.`,
      quoteAuthor: `William Shakespeare`,
    };
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route to="/" exact path="/" component={Home} />
            <Route path="/quote" component={Quote} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}

module.exports = App;
