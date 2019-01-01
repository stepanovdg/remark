import { THEMES, DEFAULT_THEME } from 'app/constants/main';

import Preloader from 'app/components/preloader';

export default class Root extends Component {
  componentWillMount() {
    this.updateMainParams();

    this.props.increaseLoadingCounter();
    // emulation of loading
    setTimeout(() => this.props.decreaseLoadingCounter(), 2000);
  }

  componentWillReceiveProps(nextProps) {
    this.updateMainParams(nextProps);
  }

  updateMainParams(nextProps) {
    const { siteId, baseUrl, apiBase, theme } = this.props;

    if (!nextProps) {
      this.props.setMainParams({
        siteId,
        baseUrl,
        apiBase,
        ...(theme && THEMES.includes(theme) ? { theme } : {}),
      });
    } else {
      const { theme: nextTheme } = nextProps;
      this.props.setMainParams({
        siteId,
        baseUrl,
        apiBase,
        ...(theme && nextTheme && theme !== nextTheme && THEMES.includes(theme) ? { theme: nextTheme } : {}),
      });
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
  siteId: PropTypes.string,
  baseUrl: PropTypes.string,
  apiBase: PropTypes.string,
  theme: PropTypes.string,

  currentTheme: PropTypes.string,
  isLoading: PropTypes.bool,

  setMainParams: PropTypes.func,
  decreaseLoadingCounter: PropTypes.func,
  increaseLoadingCounter: PropTypes.func,
};
