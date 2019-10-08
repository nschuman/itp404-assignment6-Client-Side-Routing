import React from 'react';
import { fetchUserThreads } from './RedditApi';
import ThreadCard from './ThreadCard';
import Loading from './Loading';

export default class AuthorDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      threads: [],
      loading: true
    };
  }
  componentDidMount=async() =>{
    console.log(this.props);
    let threads = await fetchUserThreads(this.props.match.params.author);
    this.setState({ threads:threads.data.children, loading: false });
  }
  componentDidUpdate = async (previousProps) => {
    const { author } = this.props.match.params;

    if (previousProps.match.params.author !== author) {
      let threads = await fetchUserThreads(author);
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