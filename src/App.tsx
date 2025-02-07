import Header from './components/Header';
import LoginForm from './components/LoginForm';
import HeroImage from './components/HeroImage';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <main>
          <div className="flex flex-col lg:flex-row-reverse w-full justify-between">
            <HeroImage />
            <LoginForm />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
