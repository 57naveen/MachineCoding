🧠 What is happening conceptually?
You have:

A general-purpose function printfulName which logs the full name with location.

Multiple objects (name, name2, name3) with their own firstname and lastname.

You use call, apply, and bind to “borrow” the printfulName function and run it in the context of different objects.

🔍 1. call()

printfulName.call(name, 'chennai', 'tamilnadu');
Immediately invokes the function.

Sets this to name.

Arguments are passed individually, separated by commas.

💥 Output:
naveen kishore from chennai,tamilnadu


🔍 2. apply()

printfulName.apply(name3, ['chennai', 'tamilnadu']);
Immediately invokes the function.

Sets this to name3.

Arguments are passed as a single array.

💥 Output:
Sam vel from chennai,tamilnadu


🔍 3. bind()

let printMyName = printfulName.bind(name2, 'chennai', 'tamilnadu');
printMyName();
Returns a new function with this bound to name2.

Does not invoke immediately — you must call it manually.

Arguments are passed like call() (individually).

💥 Output:
Sachine Tendulkar from chennai,tamilnadu


✅ Summary Table
Method	Executes Immediately	this Context	Arguments
call	✅ Yes	Set to object	Comma-separated
apply	✅ Yes	Set to object	As an array
bind	❌ No (returns fn)	Set to object	Comma-separated
