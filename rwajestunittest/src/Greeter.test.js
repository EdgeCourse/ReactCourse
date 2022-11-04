import React from 'react';
import Greeter from './Greeter'

test('provides a greeting', () => {
  const greeter = new Greeter('Ada Lovelace');

  const greeting = greeter.getGreeting();

  expect(greeting).toBe('Hello, Ada Lovelace')
});

test('provides a default greeting', () => {
    const greeter = new Greeter();
  
    const greeting = greeter.getGreeting();
  
    expect(greeting).toBe('Hello, Anonymous')
  });
  
test('Can generate a greeting asynchronously', async () => {
    const greeter = new Greeter('Ada Lovelace');
  
    const greeting = await greeter.getGreetingAsync();
  
    expect(greeting).toBe('Hello, Ada Lovelace');
})