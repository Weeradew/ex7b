function checkSID() {
	let sid = (document.getElementById("sid").value).trim();
	const regex = /^[0-9]{10}$/; // ต้องเป็นตัวเลข 10 หลักเท่านั้น
	return regex.test(sid);
  }
  
  function checkCandiNo() {
	let candi = (document.getElementById("candi").value).trim();
	let num = parseInt(candi);
	return /^[0-9]+$/.test(candi) && !isNaN(num) && num >= 1 && num <= 10;
  }
  
  function validateForm() {
	const sidInput = document.getElementById("sid");
	const candiInput = document.getElementById("candi");
  
	if (!checkSID()) {
	  alert("❌ Student ID ต้องมีความยาว 10 หลัก และเป็นตัวเลขเท่านั้น (0–9)");
	  sidInput.focus();
	  return false;
	}
  
	if (!checkCandiNo()) {
	  alert("❌ Candidate No. ต้องเป็นจำนวนเต็มระหว่าง 1 ถึง 10 เท่านั้น");
	  candiInput.focus();
	  return false;
	}
  
	alert("✅ ข้อมูลของคุณถูกต้องแล้ว!");
	return true;
  }
  