
export let FormMix = (superclass) => class extends superclass {
  constructor(props) {
    super(props);

    this.props.onSubmit = (data,callback) => {
      this.onSubmit(data,callback);
    };

  }

  // React
  componentDidMount() {
    this.render();
  }

  // Interface
  onSubmit(data,callback) {}

};
