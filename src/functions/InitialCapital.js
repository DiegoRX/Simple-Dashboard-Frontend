function InitialCapital(string) {
  return (string.charAt(0).toUpperCase() + string.slice(1).toLowerCase().replace('_', ' '));
}

export default InitialCapital;
