/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/*
Connection nos ayuda a realizar la conexión con las bases de datos con el servidor;
Statement nos ayuda a poder definir y manipular los datos de las bases de datos
creación de las bases de datos, insertar tablas, eliminarlas, create, drop, alter
manipulación de los datos, insert, update, delete;
ResultSet nos ayuda para las querrys, o las consultas de las bases de datos;
*/

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.sql.ResultSet;
import javax.servlet.ServletConfig;

/**
 *
 * @author user
 */
public class Registro extends HttpServlet {
    
    //variables globales
    
    private Connection con;
    private Statement set;
    private ResultSet rs;
    
    /*constructor del servlet
    nos va a ayudar a inicializar la conexión con la base de datos.
    */

    public void init(ServletConfig cfg) throws ServletException{
        
        //lo priumero que necesitamos es trazar la ruta del servidor a la base de datos
        String URL = "jdbc:mysql:3306//localhost/registro4iv8";
        //driver:gestor:puerto//IP/nombreBD
        String userName = "root";
        String password = "OBYMA107";
        
        try{
            //colocamos el tipo de driver
            Class.forName("com.mysql.jdbc.Driver");
            //En algunas ocaciones sale error porque ya está integrado el puerto en el driver
            URL = "jdbc:mysql://localhost/registro4iv8";
            con = DriverManager.getConnection(URL, userName, password);
            set = con.createStatement();
            System.out.println("Conexión Exitosa");
            
        }catch(Exception e){
            
            System.out.println("Conexión no exitosa");
            System.out.println(e.getMessage());
            System.out.println(e.getStackTrace());
            
        }
        
    }
    
    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            
            String nom, appat, appmat, correo, ip, iph;
            int edad, puerto, puertoh;
            
            nom = request.getParameter("nombre");
            appat = request.getParameter("appat");
            appmat = request.getParameter("appmat");
            correo = request.getParameter("correo");
            
            edad = Integer.parseInt(request.getParameter("edad"));
            
            ip = request.getLocalAddr();
            puerto = request.getLocalPort();
            
            iph = request.getRemoteAddr();
            puertoh = request.getRemotePort();
            
            /*
            Una vez que tengamos los datos vamos  insertarlos en la bd
            
            insert into table nombre_tabla (definicion_atributo, definicion_atributo...)
            values ("valores_cadena", valores_numericos, ..);
            */
            
            try{
            
                String q = "insert into Mregistro (nom_usu, appat_usu, appmat_usu, edad_usu, correo_usu)"
                        + "values ('"+nom+"', '"+appat+"', '"+appmat+"', "+edad+", '"+correo+"')";
              
                //ejecutar la sentencia.
               set.executeUpdate(q);
               System.out.println("Registro Exitoso");
                
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Registro</title>");            
            out.println("</head>");
            out.println("<body>"
                    + "Tu nombre es: " + nom);
            out.println("<br>"
                    + "Tu apellido Paterno es: " + appat
                    + "<br>"
                    + "Tu apellido Materno es: " + appmat
                    + "<br>"
                    + "Tu edad es: " + edad
                    + "<br>"
                    + "Tu correo electrónico es: " + correo);
            out.println("IP local: " + ip
                    + "<br>"
                    + "Puerto Local: " + puerto
                    + "<br>"
                    + "IP Remota: " + iph
                    + "<br>"
                    + "Puerto Remoto: " + puertoh);
            out.println("<h1>Registro Exitoso</h1>"
                    + "<a href='index.html'>Regresar a la página principal</a>");
            out.println("</body>");
            out.println("</html>");
            
            }catch(Exception e){
                
                out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Registro</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Registro No Exitoso, vuelva a intentarlo</h1>"
                    + "<a href='index.html'>Regresar a la página principal</a>");
            out.println("</body>");
            out.println("</html>");
            
            System.out.println("No se registro en la tabla");
            System.out.println(e.getMessage());
            System.out.println(e.getStackTrace());
            
            }
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
