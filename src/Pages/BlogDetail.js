import React from 'react';
import { useLocation, useHistory, useParams, useRouteMatch } from 'react-router-dom';

export default function BlogDetailPage(props) {
  return (
    <>
      <h2>Blog Detail Page</h2>
      <div>
        <pre>{JSON.stringify(props.history)}</pre>
        <pre>{JSON.stringify(props.location)}</pre>
        <pre>{JSON.stringify(props.match)}</pre>
      </div>
      <BlogDetail />
    </>
  );
}

function BlogDetail() {
  const location = useLocation();
  const history = useHistory();
  const param = useParams();
  const isBlog1 = useRouteMatch('/blog/1');
  return (
    <div>
      <div>
        <button onClick={() => history.push('/')}>Go Home useHistory</button>
      </div>
      <div>
        useLocation: <pre>{JSON.stringify(location)}</pre>
      </div>
      <div>
        useParams: <pre>{JSON.stringify(param)}</pre>
      </div>
      <div>{isBlog1 ? 'matches' : "dosen't match"} route '/blog/1'"</div>
    </div>
  );
}
