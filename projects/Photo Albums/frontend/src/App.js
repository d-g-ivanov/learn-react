import './styles.css';

import { AlbumProvider } from './store';

import AlbumsContainer from './components/AlbumsContainer';

export default function App() {
  return (
    <AlbumProvider>
      <AlbumsContainer />
    </AlbumProvider>
  );
}
