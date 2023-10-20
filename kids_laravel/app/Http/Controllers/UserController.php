<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users=User::all();
        return view('Admin.user.user',compact("users"));
    }

    public function userCreate(Request $request){
        $data = Validator::make(
            $request->all(),
            [
                'first_name' => ['required', 'string', 'max:255'],
                'last_name' => ['required', 'string', 'max:255'],
                'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
                'password' => [
                    'required',
                    Rules\Password::min(8)->mixedCase()->numbers()->symbols(),
                ],
            ],
            // [
            //     'first_name.required' => 'The first name field is required.',
            //     'last_name.required' => 'The last name field is required.',
            //     'email.required' => 'The email field is required.',
            //     'email.email' => 'Invalid email address format.',
            //     'email.max' => 'Email address must not exceed 255 characters.',
            //     'email.unique' => 'This email address is already in use.',
            //     'password.required' => 'The password field is required.',
            //     'password.min' => 'Password must be at least 8 characters long.',
            //     'password.mixed_case' => 'Password must include both upper and lower case letters.',
            //     'password.numbers' => 'Password must include at least one number.',
            //     'password.symbols' => 'Password must include at least one symbol.',
            // ]
        );
        
        if ($data->fails()) {
            return response()->json(['errors' => $data->errors()->all()], 422);
        }
        



        $user = new User();
        $user->first_name = $request->first_name;
        $user->last_name = $request->last_name;
        $user->email = $request->email;
        $user->password =Hash::make($request->password);
        $user->Role = 'user';

        $user->save();

        return response($user, 201);
    }

    public function userCheck(Request $request){
        $user = User::where('email', $request->email)->first();
    
        if ($user) {
            if (Hash::check($request->password, $user->password)) {
                // Password matches

                return response($user->id, 201);
            } else {
                // Password does not match
                return response('False', 201);
            }
        } else {
            // User not found
            return response('Email not registered', 201);
        }
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('Admin.user.Adduser');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        $input = new User;

        $input->first_name = $request->first_name;
        $input->last_name = $request->last_name;
        $input->email = $request->email;
        $input->password =Hash::make($request->password);
        $input->role = 'user';
        $input->save();
        return redirect()->route('users.index');

        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        User::destroy($id);
        return redirect()->route('users.index');
    }
}
