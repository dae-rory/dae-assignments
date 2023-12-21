#include <iostream>
using namespace std;

// Function declaration
void greetUser(string name);

int main() {
    // Creating variables with different data types
    string userName = "Alice";
    int userAge = 25;

    // Conditional statement
    if (userAge >= 18) {
        cout << "Access granted." << endl;
    } else {
        cout << "Access denied." << endl;
    }

    // Calling the function
    greetUser(userName);

    return 0;
}

// Creating and calling a function
void greetUser(string name) {
    // This function greets the user
    cout << "Hello, " << name << "!" << endl;
}