package ASimulatorSystem;

import java.sql.*;

public class Conn { 
    Connection c;
    Statement s;
    
    
    Conn(){
    try{
        Class.forName("com.mysql.cj.jdbc.Driver");
        
        c  = DriverManager.getConnection("jdbc:mysql:///bankmanagementsystem","root","Om@487571");
        s = c.createStatement();
    }catch(Exception e){
    e.printStackTrace();}
        }
    
}
