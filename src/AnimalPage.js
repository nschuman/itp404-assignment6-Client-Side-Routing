import React from 'react';
import { fetchThreads } from './RedditApi';
import ThreadCard from './ThreadCard';
import Loading from './Loading';


export default class AnimalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      threads: [],
      loading: true
    };
  }
  componentDidMount=async() =>{
    console.log(this.props);
    let threads = await fetchThreads(this.props.match.params.animal);
    this.setState({ threads:threads.data.children, loading: false });
  }
  componentDidUpdate = async (previousProps) => {
    const { animal } = this.props.match.params;

    if (previousProps.match.params.animal !== animal) {
      let threads = await fetchThreads(animal);
      this.setState({ threads:threads.data.children, loading: false });
    }
  }
   render() {
    return (
      <div className="threads">
        {this.state.loading ? <Loading /> : this.state.threads.map((thread) => {
            return <ThreadCard thread={thread} />
        })}
      </div>
    );
  }
}