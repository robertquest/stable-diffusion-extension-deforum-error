// mouseover tooltips for various UI elements

deforum_titles = {
    //Run
    "Override settings": "specify a custom settings file and ignore settings displayed in the interface",
	"Custom settings file": "the path to a custom settings file",
    "Width": "The width of the output images, in pixels (must be a multiple of 64)",
    "Height": "The height of the output images, in pixels (must be a multiple of 64)",
    "Restore faces": "Restore low quality faces using GFPGAN neural network",
    "Tiling": "Produce an image that can be tiled.",
    "Highres. fix": "Use a two step process to partially create an image at smaller resolution, upscale, and then improve details in it without changing composition",
    "Seed": "A value that determines the output of random number generator - if you create an image with same parameters and seed as another image, you'll get the same result",
    "Sampler": "Which algorithm to use to produce the image",
    "Enable extras": "enable additional seed settings",
    "Subseed": "Seed of a different picture to be mixed into the generation.",
    "Subseed strength": "How strong of a variation to produce. At 0, there will be no effect. At 1, you will get the complete picture with variation seed (except for ancestral samplers, where you will just get something).",
    "Resize seed from width": "Normally, changing the resolution will completely change an image, even when using the same seed. If you generated an image with a particular seed and then changed the resolution, put the original resolution here to get an image that more closely resemles the original",
    "Resize seed from height": "Normally, changing the resolution will completely change an image, even when using the same seed. If you generated an image with a particular seed and then changed the resolution, put the original resolution here to get an image that more closely resemles the original",
    "Steps": "How many times to improve the generated image iteratively; higher values take longer; very low values can produce bad results",
    //"ddim_eta": "";
    //"n_batch": "",
    //"make_grid": "",
    //"grid_rows": "",
    //"save_settings": "",
    //"save_samples": "",
    "Batch name": "output images will be placed in a folder with this name, inside of the img2img output folder",
	"Pix2Pix img CFG schedule": "*Only in use with pix2pix checkpoints!*",
    "Filename format": "specify the format of the filename for output images",
    "Seed behavior": "defines the seed behavior that is used for animations",
        "iter": "the seed value will increment by 1 for each subsequent frame of the animation",
        "fixed": "the seed will remain fixed across all frames of animation",
        "random": "a random seed will be used on each frame of the animation",
		"schedule": "specify your own seed schedule (found on the Keyframes page)",

    //Keyframes
    "Animation mode": "selects the type of animation",
        "2D": "only 2D motion parameters will be used, but this mode uses the least amount of VRAM. You can optionally enable flip_2d_perspective to enable some psuedo-3d animation parameters while in 2D mode.",
        "3D": "enables all 3D motion parameters.",
        "Video Input": "will ignore all motion parameters and attempt to reference a video loaded into the runtime, specified by the video_init_path. Max_frames is ignored during video_input mode, and instead, follows the number of frames pulled from the video’s length. Resume_from_timestring is NOT available with Video_Input mode.",
    "Max frames": "the maximum number of output images to be created",
    "Border": "controls handling method of pixels to be generated when the image is smaller than the frame.",
        "wrap": "pulls pixels from the opposite edge of the image",
        "replicate": "repeats the edge of the pixels, and extends them. Animations with quick motion may yield lines where this border function was attempting to populate pixels into the empty space created.",
    "Angle": "2D operator to rotate canvas clockwise/anticlockwise in degrees per frame",
    "Zoom": "2D operator that scales the canvas size, multiplicatively. [static = 1.0]",
    "Translation X": "2D & 3D operator to move canvas left/right in pixels per frame",
    "Translation Y": "2D & 3D operator to move canvas up/down in pixels per frame", 
    "Translation Z": "3D operator to move canvas towards/away from view [speed set by FOV]",
    "Rotation 3D X": "3D operator to tilt canvas up/down in degrees per frame",
    "Rotation 3D Y": "3D operator to pan canvas left/right in degrees per frame",
    "Rotation 3D Z": "3D operator to roll canvas clockwise/anticlockwise",
    "Enable perspective flip": "enables 2D mode functions to simulate faux 3D movement",
    "Perspective flip theta": "the roll effect angle",
    "Perspective flip phi": "the tilt effect angle",
    "Perspective flip gamma": "the pan effect angle",
    "Perspective flip fv": "the 2D vanishing point of perspective (recommended range 30-160)",
    "Noise schedule": "amount of graininess to add per frame for diffusion diversity",
    "Strength schedule": "amount of presence of previous frame to influence next frame, also controls steps in the following formula [steps - (strength_schedule * steps)]",
    "Sampler schedule": "controls which sampler to use at a specific scheduled frame",
    "Contrast schedule": "adjusts the overall contrast per frame [default neutral at 1.0]",
    "CFG scale schedule": "how closely the image should conform to the prompt. Lower values produce more creative results. (recommended range 5-15)",
    "FOV schedule": "adjusts the scale at which the canvas is moved in 3D by the translation_z value. [maximum range -180 to +180, with 0 being undefined. Values closer to 180 will make the image have less depth, while values closer to 0 will allow more depth]",
    //"near_schedule": "",
    //"far_schedule":  "",
    "Seed schedule": "allows you to specify seeds at a specific schedule, if seed_behavior is set to schedule.",
    "Color coherence": "The color coherence will attempt to sample the overall pixel color information, and trend those values analyzed in the first frame to be applied to future frames.",
        "None": "Disable color coherence",
        "Match Frame 0 HSV": "HSV is a good method for balancing presence of vibrant colors, but may produce unrealistic results - (ie.blue apples)",
        "Match Frame 0 LAB": "LAB is a more linear approach to mimic human perception of color space - a good default setting for most users.",
        "Match Frame 0 RGB": "RGB is good for enforcing unbiased amounts of color in each red, green and blue channel - some images may yield colorized artifacts if sampling is too low.",
    "Cadence": "A setting of 1 will cause every frame to receive diffusion in the sequence of image outputs. A setting of 2 will only diffuse on every other frame, yet motion will still be in effect. The output of images during the cadence sequence will be automatically blended, additively and saved to the specified drive. This may improve the illusion of coherence in some workflows as the content and context of an image will not change or diffuse during frames that were skipped. Higher values of 4-8 cadence will skip over a larger amount of frames and only diffuse the “Nth” frame as set by the diffusion_cadence value. This may produce more continuity in an animation, at the cost of little opportunity to add more diffused content. In extreme examples, motion within a frame will fail to produce diverse prompt context, and the space will be filled with lines or approximations of content - resulting in unexpected animation patterns and artifacts. Video Input & Interpolation modes are not affected by diffusion_cadence.",
    "Noise type": "Selects the type of noise being added to each frame",
        "uniform": "Uniform noise covers the entire frame. It somewhat flattens and sharpens the video over time, but may be good for cartoonish look. This is the old default setting.",
        "perlin": "Perlin noise is a more natural looking noise. It is heterogeneous and less sharp than uniform noise, this way it is more likely that new details will appear in a more coherent way. This is the new default setting.",
    "Perlin W": "The width of the Perlin sample. Lower values will make larger noise regions. Think of it as inverse brush stroke width. The greater this setting, the smaller details it will affect.",
    "Perlin H": "The height of the Perlin sample. Lower values will make larger noise regions. Think of it as inverse brush stroke width. The greater this setting, the smaller details it will affect.",
    "Perlin octaves": "The number of Perlin noise octaves, that is the count of P-noise iterations. Higher values will make the noise more soft and smoke-like, whereas lower values will make it look more organic and spotty. It is limited by 8 octaves as the resulting gain will run out of bounds.",
    "Perlin persistence": "How much of noise from each octave is added on each iteration. Higher values will make it more straighter and sharper, while lower values will make it rounder and smoother. It is limited by 1.0 as the resulting gain fill the frame completely with noise.",
    "Use depth warping": "enables instructions to warp an image dynamically in 3D mode only.",
    "MiDaS weight": "sets a midpoint at which a depthmap is to be drawn: range [-1 to +1]",
    "Padding mode": "instructs the handling of pixels outside the field of view as they come into the scene.",
	    //"border": "Border will attempt to use the edges of the canvas as the pixels to be drawn", //duplicate name as another property
	    "reflection": "reflection will attempt to approximate the image and tile/repeat pixels",
	    "zeros": "zeros will not add any new pixel information",
	"sampling_mode": "choose from Bicubic, Bilinear or Nearest modes. (Recommended: Bicubic)",
    "Save depth maps": "will output a greyscale depth map image alongside the output images.",
    
	// Prompts
	"Prompts": "prompts for your animation in a JSON format. Use --neg words to add 'words' as negative prompt",
	"Prompts positive": "positive prompt to be appended to *all* prompts",
	"Prompts negative": "negative prompt to be appended to *all* prompts. DON'T use --neg here!",
	
    //Init
	"Use init": "Diffuse the first frame based on an image, similar to img2img.",
    "Strength": "Controls the strength of the diffusion on the init image. 0 = disabled",
    "Strength 0 no init": "Set the strength to 0 automatically when no init image is used",
    "Init image": "the path to your init image",
    "Use mask": "Use a grayscale image as a mask on your init image. Whiter areas of the mask are areas that change more.",
    "Use alpha as mask": "use the alpha channel of the init image as the mask",
    "Mask file": "the path to your mask image",
    "Invert mask": "Inverts the colors of the mask",
    "Mask brightness adjust": "adjust the brightness of the mask. Should be a positive number, with 1.0 meaning no adjustment.",
    "Mask contrast adjust": "adjust the brightness of the mask. Should be a positive number, with 1.0 meaning no adjustment.",
    "overlay mask": "Overlay the masked image at the end of the generation so it does not get degraded by encoding and decoding",
    "Mask overlay blur": "Blur edges of final overlay mask, if used. Minimum = 0 (no blur)",
    "Video init path": "the directory \/ URL at which your video file is located for Video Input mode only",
    "Extract nth frame": "during the run sequence, only frames specified by this value will be extracted, saved, and diffused upon. A value of 1 indicates that every frame is to be accounted for. Values of 2 will use every other frame for the sequence. Higher values will skip that number of frames respectively.",
	"Extract from frame":"start extracting the input video only from this frame number",
	"Extract to frame": "stop the extraction of the video at this frame number. -1 for no limits",
    "Overwrite extracted frames": "when enabled, will re-extract video frames each run. When using video_input mode, the run will be instructed to write video frames to the drive. If you’ve already populated the frames needed, uncheck this box to skip past redundant extraction, and immediately start the render. If you have not extracted frames, you must run at least once with this box checked to write the necessary frames.",
    "Use mask video": "video_input mode only, enables the extraction and use of a separate video file intended for use as a mask. White areas of the extracted video frames will not be affected by diffusion, while black areas will be fully effected. Lighter/darker areas are affected dynamically.",
    "Video mask path": "the directory in which your mask video is located.",
    "Interpolate key frames": "selects whether to ignore prompt schedule or _x_frames.",
    "Interpolate x frames": "the number of frames to transition thru between prompts (when interpolate_key_frames = true, then the numbers in front of the animation prompts will dynamically guide the images based on their value. If set to false, will ignore the prompt numbers and force interpole_x_frames value regardless of prompt number)",
    "Resume from timestring": "instructs the run to start from a specified point",
    "Resume timestring": "the required timestamp to reference when resuming. Currently only available in 2D & 3D mode, the timestamp is saved as the settings .txt file name as well as images produced during your previous run. The format follows: yyyymmddhhmmss - a timestamp of when the run was started to diffuse.",
	
    //Video Output
    "Skip video for run all": "when checked, do not output a video",
	"Make GIF": "create a gif in addition to .mp4 file. supports up to 30 fps, will self-disable at higher fps values",
    "FPS": "The frames per second that the video will run at",
    "Output format": "select the type of video file to output",
        "PIL gif": "create an animated GIF",
        "FFMPEG mp4": "create an MP4 video file",
    "FFmpeg location": "the path to where ffmpeg is located. Leave at default 'ffmpeg' if ffmpeg is in your PATH!",
	"FFmpeg crf": "controls quality where lower is better, less compressed. values: 0 to 51, default 17",
	"FFmpeg preset": "controls how good the compression is, and the operation speed. If you're not in a rush keep it at 'veryslow'",
    "Add soundtrack": "when this box is checked, and FFMPEG mp4 is selected as the output format, an audio file will be multiplexed with the video.",
    "Soundtrack path": "the path\/ URL to an audio file to accompany the video",
    "Use manual settings": "when this is unchecked, the video will automatically be created in the same output folder as the images. Check this box to specify different settings for the creation of the video, specified by the following options",
    "Render steps": "render each step of diffusion as a separate frame",
    "Max video frames": "the maximum number of frames to include in the video, when use_manual_settings is checked",
    //"path_name_modifier": "",
    "Image path": "the location of images to create the video from, when use_manual_settings is checked",
    "MP4 path": "the output location of the mp4 file, when use_manual_settings is checked",
	"Engine": "choose the frame interpolation engine and version",
	"Interp x":"how many times to interpolate the source video. e.g source video fps of 12 and a value of x2 will yield a 24fps interpolated video",
	"Slow-Mo x":"how many times to slow-down the video. *Naturally affects output fps as well",
	"Keep Imgs": "delete or keep raw affected (interpolated/ upscaled depending on the UI section) png imgs. Default: False which means delete",
	"Interpolate an existing video":"This feature allows you to interpolate any video with a dedicated button. Video could be completly unrelated to deforum",
	"In Frame Count": "uploaded video total frame count",
	"In FPS":"uploaded video FPS",
	"Interpolated Vid FPS":"calculated output-interpolated video FPS",

    // Looper Args
    // "use_looper": "",
	"Enable guided images mode": "check this box to enable guided images mode",
    "Images to use for keyframe guidance": "images you iterate over, you can do local or web paths (no single backslashes!)",
    "Image strength schedule": "how much the image should look like the previou one and new image frame init. strength schedule might be better if this is higher, around .75 during the keyfames you want to switch on",
    "Blend factor max": "blendFactor = blendFactorMax - blendFactorSlope * cos((frame % tweening_frames_schedule) / (tweening_frames_schedule / 2))",
    "Blend factor slope": "blendFactor = blendFactorMax - blendFactorSlope * cos((frame % tweening_frames_schedule) / (tweening_frames_schedule / 2))",
    "Tweening frames schedule": "number of the frames that we will blend between current imagined image and input frame image",
    "Color correction factor": "how close to get to the colors of the input frame image/ the amount each frame during a tweening step to use the new images colors"
}


onUiUpdate(function(){
	gradioApp().querySelectorAll('span, button, select, p').forEach(function(span){
		tooltip = deforum_titles[span.textContent];

		if(!tooltip){
		    tooltip = deforum_titles[span.value];
		}

		if(!tooltip){
			for (const c of span.classList) {
				if (c in deforum_titles) {
					tooltip = deforum_titles[c];
					break;
				}
			}
		}

		if(tooltip){
			span.title = tooltip;
		}
	})

	gradioApp().querySelectorAll('select').forEach(function(select){
	    if (select.onchange != null) return;

	    select.onchange = function(){
            select.title = deforum_titles[select.value] || "";
	    }
	})
})