import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Octicon, {RepoForked, Star, Heart} from '@primer/octicons-react'
import './Footer.css';

export default class Footer extends React.Component {
    constructor() {
      super();

      this.state = {
        stars: 0,
        forks: 0,
      };

    }

    componentDidMount() {
        fetch('https://api.github.com/repos/mohitjaisal/algoviz')
          .then(res => res.json())
          .then(
            (result) => {
              const { stargazers_count, forks_count } = result;
              this.setState({ stars: stargazers_count, forks: forks_count});
            },
            (error) => {
              console.log(error);
            }
          );
      }

    render(){
        return(
            <div>
              <Link href="https://mohitjaisal.com" color="inherit" target='_blank'>
                <Typography variant = 'body2'>Made with <Octicon icon={Heart}/> by Mohit Jaisal</Typography>
                <Typography variant = 'body2'>
                    <Octicon icon={RepoForked}/>{` ${this.state.forks}`} <Octicon icon={Star}/>{` ${this.state.stars}`}
                </Typography>
              </Link>
              <br></br>
            </div>
        );
    }
}