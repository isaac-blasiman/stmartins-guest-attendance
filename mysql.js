var MySql = {
    _internalCallback : function() { console.log("Callback not set")},
    Execute: function (Host, Username, Password, Database, Sql, Callback) {
        MySql._internalCallback = Callback;
        // to-do: change localhost: to mysqljs.com
        var strSrc = "http://mysqljs.com/sql.aspx?";
        strSrc += "Host=" + Host;
        strSrc += "&Username=" + Username;
        strSrc += "&Password=" + Password;
        strSrc += "&Database=" + Database;
        strSrc += "&sql=" + Sql;
        strSrc += "&Callback=MySql._internalCallback";
        var sqlScript = document.createElement('script');
        sqlScript.setAttribute('src', strSrc);
        document.head.appendChild(sqlScript);
    }
};