import Preloader from 'app/components/preloader';

export default class Root extends Component {
  componentWillMount() {
    // emulation of loading
    this.props.increaseLoadingCounter();
    setTimeout(() => this.props.decreaseLoadingCounter(), 2000);
  }

  render(props, state) {
    const { isLoading } = props;

    return (
      <div className={b('root', props, { loading: isLoading })}>
        <div className="root__body">
          remark42
        </div>

        <Preloader mix="root__preloader"/>
      </div>
    );
  }
}
