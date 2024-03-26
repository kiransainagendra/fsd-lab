import React,{useState,useContext,useEffect,createContext} from 'react';

//step-1 : Create a context for the theme
const ThemeContext=createContext();

//Step-2 : Create a provider for the theme

const ThemeProvider=({children}) => {
  const[theme,setTheme]=useState('light');

const toggleTheme = () => {
  setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
};

return (
  <ThemeContext.Provider value={{theme,toggleTheme}}>
    {children}
  </ThemeContext.Provider>
);
};

// Step-3 : Create a component that uses the context


const ThemedComponent = () => {
  const {theme,toggleTheme} = useContext(ThemeContext);

  const ThemedComponentStyle = {
    background: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#333' : '#fff',
    padding: '20px',
    margin: '20px 0', 
  };

  return (
    <div style={ThemedComponentStyle}>
      <h3>Themed Component</h3>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

// Step 4: Create component with state and useEffect for the counter


const CounterComponent = () => {
  const [count,setCount]=useState(0);

  useEffect(() => {
    document.title= `Count: ${count}`
  },[count]);

  const counterStyle = {
    margin:'20px 0',
    padding:'20px',
    border:'1px solid #ccc',
    borderRadius:'8px',
  };

  return (
    <div style={counterStyle}>
      <h2>Counter Component</h2>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count+1)}>Increment</button>
      <button onClick={() => setCount(count-1)}>Decrement</button>

      {/* ThemedComponent using the context */}

      <ThemedComponent />
    </div>
  );
};

// Step 5 :Create a component with state and useEffect for the user information


const UserInfoComponent = () => {
  const [userInfo,setUserInfo] = useState({name:'',age:0});
  useEffect(() => {
    //Simulate fetching user information from an API
    const fetchUserInfo = async () => {
      //In a real application, you would make an API request here
      // For Simplicity, we're just using a setTimeout to simulate an asynchronous operation
      setTimeout(() => {
        setUserInfo({name:'SAI',age:20});
      },1000);
    };

    fetchUserInfo();
  },[]);//Empty dependency array ensures the effect runs once after the initial render

  const userInfoStyle = {
    margin:'20px 0',
    padding:'20px',
    border: '1px solid #ccc',
    borderRadius:'8px',
  };

  return (
    <div style={userInfoStyle}>
      <h2>User Info Component</h2>
      <p>Name : {userInfo.name}</p>
      <p>Age : {userInfo.age}</p>
    </div>
  );
};

const App = () => {
  const appStyle = {
    fontFamily:'Arial,sans-serif',
    maxWidth:'600px',
    margin:'auto',
    padding:'20px',
  };

  // Step 6: Create the main App component


  return (
    <ThemeProvider>
      <div style={{textAlign:'center',marginTop:'10px'}}>
        <h1 style={{borderBottom:'2px solid orange',color:'blue'}}>All Hooks @ Once</h1>
      </div>
      <div style={appStyle}>
        <CounterComponent />
        <UserInfoComponent />
      </div>
    </ThemeProvider>
  );
};
export default App;
