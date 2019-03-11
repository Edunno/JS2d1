/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import com.google.gson.Gson;
import static com.google.gson.internal.bind.TypeAdapters.URI;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * REST Web Service
 *
 * @author Esben
 */
@Path("names")
public class GenericResource {

    Gson gson = new Gson();
    List<String> strings = new ArrayList();
    {
     strings.add(new String("{\"name\": \"Peter Pan\"}"));
    }
    @Context
    private UriInfo context;

    /**
     * Creates a new instance of GenericResource
     */
    public GenericResource() {
    }

    /**
     * Retrieves representation of an instance of rest.GenericResource
     *
     * @return an instance of java.lang.String
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getJson() {
        //TODO return proper representation object
        return Response.ok().entity(gson.toJson(strings)).build();
    }

    /**
     * PUT method for updating or creating an instance of GenericResource
     *
     * @param content representation for the resource
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(String content) {
        if(strings.contains(content)){
            strings.set(strings.indexOf(content),content);
        }else{
        strings.add(content);
        }
    }
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void postJson(String content){
        strings.add(content);
    }
    
    @DELETE
    @Consumes(MediaType.APPLICATION_JSON)
    public void deleteJson(String content){
        strings.remove(content);
    }
}
