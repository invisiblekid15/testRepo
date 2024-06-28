import { useState, useEffect } from 'react';

const useCustomerPreferences = (initialPreferences = {}) => {
  const [preferences, setPreferences] = useState(initialPreferences);

  useEffect(() => {
    const savedPreferences = JSON.parse(sessionStorage.getItem('customerPreferences')) || initialPreferences;
    setPreferences(savedPreferences);
  }, []);

  useEffect(() => {
    sessionStorage.setItem('customerPreferences', JSON.stringify(preferences));
  }, [preferences]);

  const updatePreference = (key, value) => {
    setPreferences(prevPreferences => ({ ...prevPreferences, [key]: value }));
  };

  return [preferences, updatePreference];
};

export default useCustomerPreferences;
