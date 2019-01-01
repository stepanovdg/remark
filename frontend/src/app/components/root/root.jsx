import { THEMES, DEFAULT_THEME } from 'app/constants/main';

import Preloader from 'app/components/preloader';

export default class Root extends Component {
  componentWillMount() {
    const { theme } = this.props;

    if (theme) {
      if (THEMES.includes(theme)) {
        this.props.changeTheme(theme);
      }
    }

    this.props.increaseLoadingCounter();
    // emulation of loading
    setTimeout(() => this.props.decreaseLoadingCounter(), 2000);
  }

  componentWillReceiveProps(nextProps) {
    const { theme } = this.props;
    const { theme: nextTheme } = nextProps;

    if (theme && nextTheme && theme !== nextTheme) {
      if (THEMES.includes(nextTheme)) {
        this.props.changeTheme(nextTheme);
      }
    }
  }

  render(props) {
    const { isLoading, currentTheme } = props;

    return (
      <div className={b('root', props, { loading: isLoading, theme: currentTheme })}>
        <div className="root__body">
          remark42
        </div>

        <Preloader mix="root__preloader"/>
      </div>
    );
  }
}

Root.defaultProps = {
  theme: DEFAULT_THEME,
};

Root.propTypes = {
  theme: PropTypes.string,

  currentTheme: PropTypes.string,
  isLoading: PropTypes.bool,

  changeTheme: PropTypes.func,
  decreaseLoadingCounter: PropTypes.func,
  increaseLoadingCounter: PropTypes.func,
};
