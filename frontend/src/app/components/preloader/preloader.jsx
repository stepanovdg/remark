import withTheme from 'app/components/with-theme';

class Preloader extends Component {
  render(props) {
    return (
      <div className={b('preloader', props)}>
        <div className="preloader__bounce"/>
        <div className="preloader__bounce"/>
        <div className="preloader__bounce"/>
      </div>
    );
  }
}

export default withTheme(Preloader);
