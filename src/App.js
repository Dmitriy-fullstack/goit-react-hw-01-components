import Profile from './components/Profile/Profile';
import user from './user.json';
import statisticalData from './statistical-data.json';
import Statistics from './components/Statistics/Statistics';

export default function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics title="Upload stats" stats={statisticalData} />
    </div>
  );
}
