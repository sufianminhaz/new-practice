// তোমাকে isValidEmail() নামে একটি ফাংশন লিখতে হবে, যা একটি ইমেইল অ্যাড্রেস ইনপুট নেবে এবং সেটি ভ্যালিড কিনা তা যাচাই করবে।

// ✅ শর্তসমূহ:
// ইমেইলের মধ্যে অবশ্যই "@" এবং "." চিহ্ন থাকতে হবে।
// "@" চিহ্নের পর অবশ্যই "." চিহ্ন থাকতে হবে।
// ইমেইলের শেষ অংশ (ডোমেইন) ২ বা ৩ অক্ষরের হতে হবে (যেমন: .com, .net, .org, .bd ইত্যাদি)।




function isValidEmail(email){
    if(typeof email !== 'string'){
        return 'Invalid';
    }
    if (!email.includes('@') || !email.includes('.')){
        return false;
    }
    let atIndex = email.indexOf ('@')
    let dotIndex = email.indexOf ('.')

    if(dotIndex > atIndex + 1 || dotIndex < email.length - 2){
        return true;

    }
    else{
        return false;
    }


}

console.log(isValidEmail("example@gmail.com")); // true
console.log(isValidEmail("user@domain.com")); // true
console.log(isValidEmail("test@domain")); // false (".com" নেই)
console.log(isValidEmail("userdomain.com")); // false ("@" নেই)
console.log(isValidEmail("test@.com")); // false ("@" এর পর "." সাথে সাথে আছে)
console.log(isValidEmail("test@domain.c")); // false (".c" তে ২ বর্ণ নেই)
console.log(isValidEmail(12345));