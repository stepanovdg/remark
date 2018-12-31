import { connect } from 'redux-zero/preact';

const mapStateToProps = state => ({
  theme: state.theme,
});

const withTheme = PlainComponent => {
  class WrappedComponent extends Component {
    render(props) {
      const { theme, mods = {}, ...rest } = props;

      return <PlainComponent {...rest} mods={{ theme, ...mods }} />;
    }
  }

  return connect(mapStateToProps)(WrappedComponent)
};

export default withTheme;
