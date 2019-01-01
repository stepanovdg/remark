import API from 'app/services/api';

import { THEMES, DEFAULT_THEME } from 'app/constants/main';

import Preloader from 'app/components/preloader';

export default class Root extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inited: false,
    };
  }

  async componentWillMount() {
    this.updateMainParams();

    this.props.increaseLoadingCounter();

    try {
      this.props.setMainParams({ config: await API.getConfig() });
    } catch (e) {
      console.error(e);
    }

    this.props.decreaseLoadingCounter();
    this.setState({ inited: true });
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

  render() {
    const { isLoading, currentTheme, config = {} } = this.props;
    const { inited } = this.state;

    return (
      <div className={b('root', this.props, { theme: currentTheme })}>
        {
          !isLoading && inited && (
            <div className="root__body">
              {
                config.auth_providers.join(', ')
              }
            </div>
          )
        }

        {
          isLoading && <Preloader mix="root__preloader"/>
        }
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

  config: PropTypes.object,

  currentTheme: PropTypes.string,
  isLoading: PropTypes.bool,

  setMainParams: PropTypes.func,
  decreaseLoadingCounter: PropTypes.func,
  increaseLoadingCounter: PropTypes.func,
};
