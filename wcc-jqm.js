/*
 * wEbCenter Content utils *
 */


		// Check Login Form
		var userNameField = "j_username";
		var passwordField = "j_password";
		function checkLoginFields(loginForm)
		{
		if (checkEmptyValue(loginForm, userNameField))
		{
			alert("The user name field is empty. Please enter a value for this field.");
			setFocus(loginForm, userNameField);
			return false;
		}

		if (checkEmptyValue(loginForm, passwordField))
		{
			alert("The password field is empty. Please enter a value for this field.");
			setFocus(loginForm, passwordField);
			return false;
		}
		return true;
		}


	function checkEmptyValue(frm, fieldName)
	{
		try
		{
			var fld = frm[fieldName];
			if (fld.value.length > 0)
			{
				return false;
			}
		}
		catch (e)
		{
			alert("login_page.htm->checkEmptyValue: " + e);
		}
		return true;
	}
	
	function setFocus(frm, fieldName)
	{
		try
		{
			var fld = frm[fieldName];
			fld.focus();
		}
		catch (e)
		{
			alert("login_page.htm->setFocus: " + e);
		}
	}

		// TBD: Submit login form with an Ajax call


