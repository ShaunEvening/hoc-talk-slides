export default
`const Button = ({ style, onPress, children }) => (
  <TouchableOpacity
    style={[buttonStyle, style]}
    onPress={onPress}
  >
    {children}
  </TouchableOpacity>
);

const buttonStyle = {
  paddingHorizontal: '2rem',
  paddingVertical: '0.75rem',
  borderRadius: '3rem',
}

const withStyle = (baseStyle) =>
  (Component) =>
    ({ style, ...rest }) => (
      <Component
        {...rest}
        style={[baseStyle, style]}
      />
    );

const PurpleButton = withStyle({ backgroundColor: purple })(Button);

`
